//public, private, proctected

//public => 제한 없음, 누구나 access 가능
//private => 특정 class 안에서만 access 가능
//protected => 특정 class 안에서만 access 가능, 상속받는 class 안에서만 access 가능

class Base {
    first = "";
    public second = "";
    protected third = "";
    private fourth = "";
    baseFunctions() {
        this.fourth;
    }
}

class Inherited extends Base {
    myFunction() {
        this.first;
        this.second;
        this.third;
        //     this.fourth;
    }
}

const inherited = new Inherited();

inherited.first;
inherited.second;
//inherited.third
//inherited.fourth
