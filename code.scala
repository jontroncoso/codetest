// Howdy! My name is Jon and I've never coded scala or java before today! 
// I know I didn't have to, but i've always wanted to work with scala. Even just for a test.

object Code {
    
    def helloWorld() : String = {
        return "Hello World!";
        // throw new Exception("Not Implemented");
    }

    def capitalizeEveryNthWord(sentence:String, offset:Integer, n:Integer) : String = {
        var modifiedWords = new Array[String](0);
        sentence.split(" ").zipWithIndex.foreach{ case(word,i) => 
            modifiedWords :+= { if (i >= offset && i % n == 0) word.capitalize else word};
        }; // I was going to throw a mkString(" ") on the end of this and just return it like i did with js. 
        //    but I kept getting a Unit instead of an array.  If you happen to know why please tell me.
        //    As you can see, i just wound up using a seperate modifiedWords var
        return modifiedWords.mkString(" ");
    }

    def isPrime(n:Integer) : Boolean = {
        if (n <= 1)return false;
        for (i <- 2 until (n / 2)) {
            if (n % i == 0) return false;
        }
        return true;
    }

    def goldenRatio(a:Double, b:Double) : Double = {
        var ab = Code.sequencify(1001, a, b);
        return (ab(1)/ab(0)).toDouble;
    }


    def fibonacci(n:Integer) : Integer = {
        return Code.sequencify(n,0,1)(0).intValue;
    }
    

    def squareRoot(n:Double) : Double = {
        throw new Exception("Must get sleep. perhaps on monday");
    }


    protected def sequencify(n:Integer, a:Double, b:Double) = {
        // I get the feeling scala wants me to do this differently, but this is how i know it from other languages... what are you gonna do?
        var newA:BigDecimal = BigDecimal(a);
        var newB:BigDecimal = BigDecimal(b);
        var c:BigDecimal = BigDecimal(0);
        for (i <- 0 until n) {
            c = newA + newB;
            newA = newB;
            newB = c;
        }
        List(newA, newB);
    }
}
