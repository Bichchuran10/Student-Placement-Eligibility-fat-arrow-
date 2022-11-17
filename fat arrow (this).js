class Student
{
    static count=0
    constructor(name,age,phone,marks)
    {
        this.name=name
        this.age=age
        this.phone=phone
        this.marks=marks
        Student.count++
    }

checkEligibility(marks)
{
    if(this.marks>=40)
    {
        console.log(`${this.name} is eligible for college`)
    }
    else
    {
        console.log(`${this.name} is not eligible for college`)
    }
}
checkPlacementEligibility(minAge)
{
    return (minMarks)=>{
    
        if(this.marks>minMarks && this.age>minAge)
        {
            console.log(`${this.name} is eligible for plaements according to company's criteria`)
        }
        else
        {
            console.log(`${this.name} is not eligible for placements according to company's standards`)
        }
    }

}

totalStudents(count)
{
    console.log(Student.count)
}
}
let student1=new Student("Messi",24,8978638523,90)
let student2=new Student("Ronaldo",27,8978608923,70)
let student3=new Student("Neymar",20,8978638023,50)
let student4=new Student("Kohli",23,8978638903,39)
let student5=new Student("Stokes",22,8978631123,36)

student1.checkEligibility()
student2.checkEligibility()
student3.checkEligibility()
student4.checkEligibility()
student5.checkEligibility()

student5.totalStudents() //gives the total number of students

//placement Eligibility
student1.checkPlacementEligibility(22)(40)
student2.checkPlacementEligibility(22)(40)
student3.checkPlacementEligibility(22)(40)
student4.checkPlacementEligibility(22)(40)
student5.checkPlacementEligibility(22)(40)


