// create a class called shape

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

// the constructor will need to have the following perameters: text, text color, and shape color

class Circle extends Shape{
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}}">${this.text}</text>
      
      </svg>`
    }
}
// create a svg for square

class Square extends Shape{
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <square cx="150" cy="100" r="80" fill="${this.shapeColor}" /> 
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}}">${this.text}</text>
      
      </svg>`
    }
}

class Triangle extends Shape{
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="100,10 150,190 50,190" style="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}}">${this.text}</text>
      
        </svg>`

    }
}

//export 3 shapes im using with module.exports
module.exports = Shapes;