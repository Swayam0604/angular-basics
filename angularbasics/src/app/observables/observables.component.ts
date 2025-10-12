import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, delay, mergeAll, mergeMap, Observable, retry, switchMap } from 'rxjs';
import { of, from, interval, map, filter } from 'rxjs';


@Component({
  selector: 'app-ob servables',
  imports: [NgFor],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
})
export class ObservablesComponent {
  data: any[] = [];
  observable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.error('Something Went Wrong ');
    }, 3500); // this will stop the observable from emitting any more values
    setTimeout(() => {
      observer.complete();
    }, 5000); // if the time of complete is less than the time of next, it will not work
  });

  getData1() {
    this.observable.subscribe({
      next: (v) => {
        this.data.push(v);
      }, // in next you get access to the value that is the data
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        alert('Data retrived successfully');
      },
    });
  }

  getData2() {
    // using of method from rxjs which returns observable
    // you can pass as many data as you want
    let observable = of(4, 9, 'A', 'B', 12); // it returns observable with this data wraps around it
    observable.subscribe({
      // this only has two signals next and complete
      next: (v) => {
        this.data.push(v);
      },
      complete: () => console.log('Data Retrived Successfully'),
    });
  }

  getData3() {
    // from need iterable like array or string
    from('Hello').subscribe({
      next: (v) => this.data.push(v), // it emmits the value one by one data
    });
  }

  getData4() {
    // with the help of interval from rxjs
    //it emmits data from o to nth number after every 1 sec
    let subscription_obj = interval(1000).subscribe({
      // to subscribe the interval
      next: (v) => this.data.push(v),
    });
    // to unsubscribe the interval
    setTimeout(() => {
      subscription_obj.unsubscribe();
    }, 10000);
  }

  getData5() {
    // using Pipes from RXJS
    // pipes has multiple operators(functions)
    // it takes your observable and performs action on the data it goes step-by-step on all operators
    //pipe also returns a observable
    {
      of(1, 5, 8, 12, 89)
        .pipe(
          map((n) => n * n), // performs action on each observable and also returns the observable
          filter((n) => n > 100)
        )
        .subscribe({
          next: (v) => this.data.push(v),
        });
    }
  }

  getData6() {
    of(12, 56, 45, 100)
      .pipe(
        map((x) => of(x)),
        mergeAll()
      )
      .subscribe({
        next: (v) => {
          this.data.push(v);
        },
      });
  }

  getData7() {
    of(12, 56,23)
      .pipe(
        switchMap((x) => of(x).pipe(delay(2000))),
      )
      .subscribe({
        next: (v) => {
          this.data.push(v);
          console.log(v);
        },
      });
  }

  getData8() {
    interval(2000)
    .pipe(map(x => {
      if (x ==3) {
        throw new Error("Something Went Wrong");
      }
      return x+1
    }),
    retry(3),
    catchError((error) => {
      console.log(error.message);  // the error thrown from above is accessed here 
      return of(23,67,34);      // and then return a new observable 
    })
  ).subscribe({
      next: (v) => {
        this.data.push(v);
      },
    });
  }
}

