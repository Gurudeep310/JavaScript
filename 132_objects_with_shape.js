/*
Given an array of objects ObjectEntities in the prefilled code and  as an input, write a JS program to log the array of objects containing the given shape
Sample Input 
circle
Sample Output 
[
  { shape: 'circle', color: 'Green' },
  { shape: 'circle', color: 'White' }
]
*/
{

    const objectEntities = [
      {
        shape: "circle",
        color: "Green"
      },
      {
        shape: "circle",
        color: "White"
      },
      {
        shape: "triangle", 
        color: "Orange"
      }
    ];
    
    const shape = readLine();
    const arrayOfObjectsWithShape = [];
    for(let object of objectEntities)
    {
        if(object.shape === shape)
        {
            arrayOfObjectsWithShape.push(object);
        }
    }
    console.log(arrayOfObjectsWithShape);
  }