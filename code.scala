// Howdy! My name is Jon and I've never coded scala or java before today! 

object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        return "Hello World!";
        throw new Exception("Not Implemented");
    }

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    def capitalizeEveryNthWord(sentence:String, offset:Integer, n:Integer) : String = {
        var modifiedWords = new Array[String](0);
        sentence.split(" ").zipWithIndex.foreach{ case(word,i) => 
            modifiedWords :+= { if (i >= offset && i % n == 0) word.capitalize else word};
        }; // I was going to throw a mkString(" ") and just return it. but I kept getting a Unit instead of an array. 
        //    If you happen to know why please tell me.
        return modifiedWords.mkString(" ");
    }
    
    // Determine if a number is prime
    def isPrime(n:Integer) : Boolean = {
        if (n <= 1)return false;
        for (i <- 2 to (n / 2)) {
            if (n % i == 0) return false;
        }
        return true;
    }
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    def goldenRatio(a:Double, b:Double) : Double = {
        throw new Exception("Not Implemented");
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    def fibonacci(n:Integer) : Integer = {
        throw new Exception("Not Implemented");
    }
    
    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    def squareRoot(n:Double) : Double = {
        throw new Exception("Not Implemented");
    }
}
