/////////////////////////////////////////
// 1-masala
const yangi = {
    name: "Abdulxamid",
    age: 18,
    location: "Rishtan",
  };
  
  console.log(yangi);
  /////////////////////////////////////////
  // 2-masala
  const user = {
    age: 18,
    firstName: "Man",
    lastName: "Maniki",
    location: {
      city: "Manikilar",
      zipCode: 151300,
    },
  };
  
  /////////////////////////////////////////
  // 3-masala
  const crud = {
    name: "Create Read Update Delete",
  };
  
  crud.age = 18;
  crud.name = "aldama";
  delete crud.age;
  
  /////////////////////////////////////////
  // 4-masala
  const destructuring = {
    name: "Toshpolat",
    age: 30,
    address: {
      city: "Tashkent",
      street: "Amir Temur Street",
      zipCode: 100000,
    },
    contact: {
      email: "sultanovabdulxamid@gmail.com",
      phone: {
        home: "1234567",
        work: "undefined",
      },
    },
  };
  
  const {
    contact: {
      phone: { home },
    },
  } = crud;
  console.log(home);
  const {
    contact: {
      phone: { work },
    },
  } = crud;
  console.log(work);
  
  /////////////////////////////////////////
  // 5-masala
  // 1 - sabab kod kopayib obyekt kopayib ketganda chaqirishda muamo duch kelganda uni yechimini qidirish uchun
  // 2 - sabab kodni toxtatmaydi undefined chiqarib davom etirib ketadi yani havsiz oqish
  // 3- sabab kodni sodalashtirish uchun