// Utilizo for para recorrer listado de Doctores de JSON y mostrarlos en la página web.
document.addEventListener('DOMContentLoaded', function () {
  function listarDoctores() {
    fetch('./src/data/doctors.json')
      .then(response => response.json())
      .then(doctors => {
        const doctorsContainer = document.getElementById('doctores');
        for (let i = 0; i < doctors.length; i++) {
          const doctor = doctors[i];
          const doctorCard = `
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div class="card team__card mx-auto">
                <img src="./src/images/${doctor.image}" class="team__image" alt="doctor">
                <div class="card-body text-center">
                  <h5 class="card-title">${doctor.name}</h5>
                  <div class="card__chip">${doctor.specialty}</div>
                  <p class="card-text">${doctor.description}</p>
                </div>
              </div>
            </div>
          `;
          doctorsContainer.innerHTML += doctorCard;
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }

  function orderDoctorsByExperience(doctors) {
    if (doctors.length <= 1) {
      return doctors;
    }
    const pivot = doctors[doctors.length - 1].years_of_experience; // Último elemento del array
    const left = []; // Menores a pivot
    const right = []; // Mayores a pivot
    for (let i = 0; i < doctors.length - 1; i++) { // Recorrer todos los elementos menos el último
      if (doctors[i].years_of_experience > pivot) { // Si el elemento es menor al pivot lo agregamos a la izquierda, si no a la derecha
        left.push(doctors[i]);
      } else {
        right.push(doctors[i]);
      }
    }
    return [...orderDoctorsByExperience(left), doctors[doctors.length - 1], ...orderDoctorsByExperience(right)]; // Ordenamos los menores a la izquierda, los mayores a la derecha y concatenamos el resultado
  }

  // Filtro para buscar por médicos con igual o más de 5 años de experiencia.
  function showExperienceDoctors() {
    fetch('./src/data/doctors.json')
      .then(response => response.json())
      .then(doctors => {
        const doctorsContainer = document.getElementById('doctores');
        const filteredDoctors = doctors.filter(doctor => doctor.years_of_experience >= 5);
        const orderedDoctors = orderDoctorsByExperience(filteredDoctors);
        doctorsContainer.innerHTML = '';
        for (let i = 0; i < orderedDoctors.length; i++) {
          const doctor = orderedDoctors[i];
          const doctorCard = `
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div class="card team__card mx-auto">
                <img src="./src/images/${doctor.image}" class="team__image" alt="doctor">
                <div class="card-body text-center">
                  <h5 class="card-title">${doctor.name}</h5>
                  <div class="card__chip
                  ">${doctor.specialty}</div>
                  <p class="card-text">${doctor.description}</p>
                </div>
              </div>
            </div>
          `;
          doctorsContainer.innerHTML += doctorCard;
        }
      }
      )
      .catch(error => console.error('Error fetching doctors:', error));
  }

    const checkboxExperience = document.getElementById('checkYearsOfExperience');
    if (checkboxExperience) {
      checkboxExperience.addEventListener('change', (event) => {
        if (event.target.checked) {
          showExperienceDoctors();
        } else {
          listarDoctores();
        }
      });
    }
  listarDoctores();

  // Destructuring en JavaScript
  let doctor = {
    name: 'Dr. Juan Pérez',
    specialty: 'Cardiología',
    years_of_experience: 10,
    image: 'doctor-1.jpg',
  };
  let { name, specialty, years_of_experience, image } = doctor;
  console.log('Ejemplo Destructuring:', name, specialty, years_of_experience, image);

  // Clonación de un objeto JSON
  let doctorNewList = JSON.parse(JSON.stringify(doctor));
  doctorNewList.name = 'Dr. Ana García';
  doctorNewList.specialty = 'Cirujana Plástica';
  doctorNewList.years_of_experience = 8;
  doctorNewList.image = 'dr11.png';

  console.log('Original doctor:', doctor);
  console.log('Modified doctor:', doctorNewList);

  // Merge de objetos JSON
  fetch('./src/data/doctorsNew.json')
    .then(response => response.json())
    .then(newDoctors => {
      fetch('./src/data/doctors.json')
        .then(response => response.json())
        .then(doctors => {
          const mergedDoctors = [...doctors, ...newDoctors];
          const doctorsContainer = document.getElementById('doctores');
          doctorsContainer.innerHTML = '';
          for (let i = 0; i < mergedDoctors.length; i++) {
            const doctor = mergedDoctors[i];
            const doctorCard = `
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div class="card team__card mx-auto">
                  <img src="./src/images/${doctor.image}" class="team__image" alt="doctor">
                  <div class="card-body text-center">
                    <h5 class="card-title">${doctor.name}</h5>
                    <div class="card__chip">${doctor.specialty}</div>
                    <p class="card-text">${doctor.description}</p>
                  </div>
                </div>
              </div>
            `;
            doctorsContainer.innerHTML += doctorCard;
          }
        })
        .catch(error => console.error('Error fetching doctors:', error));
    })
    .catch(error => console.error('Error fetching new doctors:', error));
});
