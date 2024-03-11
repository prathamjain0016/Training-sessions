  // Array to store student objects
  var students = [];

  // Function to validate form inputs and create student object
  function validateForm(event) {
      event.preventDefault(); // Prevent form submission

      var firstname = document.getElementById("firstname").value;
      var lastname = document.getElementById("lastname").value;
      var age = document.getElementById("age").value;
      var gender = document.querySelector('input[name="gender"]:checked');
      var rollno = document.getElementById("rollno").value;
      var dob = document.getElementById("dob").value;
      var hobbies = document.getElementById("hobbies").value.split(",").map(item => item.trim());
      var device = document.getElementById("device").value;

      if (!firstname || !lastname || !age || !gender || !rollno || !dob || !hobbies || !device) {
          console.log("Please fill in all fields.");
          return;
      }

      var student = {
          firstname: firstname,
          lastname: lastname,
          age: age,
          gender: gender.value,
          rollno: rollno,
          dob: dob,
          hobbies: hobbies,
          device: device
      };

      students.push(student);
      console.log("Student added:", student);
      alert("student added");
      document.getElementById("studentForm").reset();
  }

  // Function to retrieve student details based on roll number
  function getStudentDetails() {
      var rollNoInput = document.getElementById("searchRollNo").value;
      var student = students.find(s => s.rollno === rollNoInput);
      if (student) {
          console.log("Student details:", student);
          alert("student found");
      } else {
          console.log("Student not found.");
          alert("student not found");

      }
  }

  // Event listener for form submission
  document.getElementById("studentForm").addEventListener("submit", validateForm);