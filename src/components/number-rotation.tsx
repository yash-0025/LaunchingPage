"use client"
import { cn } from "@/utils/tailwind-utils";

/* 
export const NumberRotation = ({number}: {number: number}) => { 
    
    // array.from creates a new array instance from an iterable or an array like object
    // array.from(arraylike, mapFn?)
    // arraylike :- An object or iterable to convert into an array
    // mapfn A mapping function to apply to each element of the array during creation
    // lenght:60 :- creates an array like object with a length property of 60
    // (_i, i) => i is a mapping function 
    // _ it represents the value of each element in the array like object The underscore is used here because the value is irrelevant 
    // i represents the index of current element
    // The function retruns index i, which fills the resulting array with numbers from 0 to 59

    const numbers = Array.from({ length: 60 }, (_, i) => i);

    const getClass = (num: number) => {
        if (number === num) return "opacity-100 transform none";
        if(number > num) return "opacity-0 -translate-y-2";
        return "opacity-0 translate-y-2";
    };

    return (
    <div className="relative h-10 w-10">
        {numbers.map((num) => (
        <div
        key={num}
        className={ cn(
            "w-full h-full absolute transition-all duration-200",
            getClass(num)
        )}
        >
        {num}
        </div>
    ))}
    </div>
    );
}; */


export const NumberRotation = ({ number }: { number: number }) => {
    const numbers = Array.from({ length: 60 }, (_, i) => i);
  
    // Determine the class for each number based on the current number
    const getClass = (num: number) => {
      if (number === num) return "opacity-100 transform-none";
      if (number > num) return "opacity-0 -translate-y-2";
      return "opacity-0 translate-y-2";
    };
  
    return (
      <div className="relative h-10 w-10">
        {numbers.map((num) => (
          <div
            key={num}
            className={cn(
              "w-full h-full absolute transition-all duration-200",
              getClass(num)
            )}
          >
            {num}
          </div>
        ))}
      </div>
    )
  };