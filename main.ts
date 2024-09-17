// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('resume-form') as HTMLFormElement;
//   const resumeSection = document.getElementById('resume') as HTMLElement;

//   // Handle form submission
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const institution = (document.getElementById('institution') as HTMLInputElement).value;
//     const degree = (document.getElementById('degree') as HTMLInputElement).value;
//     const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
//     const company = (document.getElementById('company') as HTMLInputElement).value;
//     const role = (document.getElementById('role') as HTMLInputElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

//     // Update resume section
//     (document.getElementById('resume-name') as HTMLHeadingElement).textContent = name;
//     (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
//     (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
//     (document.getElementById('resume-institution') as HTMLParagraphElement).textContent = `Institution: ${institution}`;
//     (document.getElementById('resume-degree') as HTMLParagraphElement).textContent = `Degree: ${degree}`;
//     (document.getElementById('resume-gradYear') as HTMLParagraphElement).textContent = `Graduation Year: ${gradYear}`;
//     (document.getElementById('resume-company') as HTMLParagraphElement).textContent = `Company: ${company}`;
//     (document.getElementById('resume-role') as HTMLParagraphElement).textContent = `Role: ${role}`;
//     (document.getElementById('resume-experience-description') as HTMLParagraphElement).textContent = `Experience: ${experience}`; // Updated this line

//     const skillsElement = document.getElementById('resume-skills') as HTMLParagraphElement;
//     skillsElement.innerHTML = skills.map(skill => `<span class="skill">${skill.trim()}</span>`).join(', ');

//     resumeSection.classList.remove('hidden');
//   });

//   // Share Resume
//   document.getElementById('shareBtn')?.addEventListener('click', () => {
//     const baseUrl = window.location.href.split('?')[0]; // Get the base URL
//     const uniqueId = Math.random().toString(36).substring(2, 15); // Generate a unique ID
//     const shareableUrl = `${baseUrl}?resume=${uniqueId}`;

//     // Example: Show the URL to the user
//     alert(`Share your resume using this URL: ${shareableUrl}`);
//   });

//   // Handle image upload
//   const imageInput = document.getElementById('upload') as HTMLInputElement;
//   const profileImg = document.getElementById('profile-img') as HTMLImageElement;

//   imageInput.addEventListener('change', (event) => {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         profileImg.src = reader.result as string; // Set uploaded image to the resume
//       };
//       reader.readAsDataURL(file); // Convert image to base64 format
//     }
//   });
// });

  




document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeSection = document.getElementById('resume') as HTMLElement;
  const editBtn = document.getElementById('edit-btn') as HTMLButtonElement;

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const institutionInput = document.getElementById('institution') as HTMLInputElement;
  const degreeInput = document.getElementById('degree') as HTMLInputElement;
  const gradYearInput = document.getElementById('gradYear') as HTMLInputElement;
  const companyInput = document.getElementById('company') as HTMLInputElement;
  const roleInput = document.getElementById('role') as HTMLInputElement;
  const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
  const skillsInput = document.getElementById('skills') as HTMLInputElement;

  let currentData: any = {}; // Store resume data for editing

  // Function to populate the form for editing
  const populateForm = (data: any) => {
    nameInput.value = data.name || '';
    emailInput.value = data.email || '';
    phoneInput.value = data.phone || '';
    institutionInput.value = data.institution || '';
    degreeInput.value = data.degree || '';
    gradYearInput.value = data.gradYear || '';
    companyInput.value = data.company || '';
    roleInput.value = data.role || '';
    experienceInput.value = data.experience || '';
    skillsInput.value = data.skills?.join(', ') || '';
  };

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    currentData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      institution: institutionInput.value,
      degree: degreeInput.value,
      gradYear: gradYearInput.value,
      company: companyInput.value,
      role: roleInput.value,
      experience: experienceInput.value,
      skills: skillsInput.value.split(',').map(skill => skill.trim()),
    };

    // Update resume section
    (document.getElementById('resume-name') as HTMLHeadingElement).textContent = currentData.name;
    (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${currentData.email}`;
    (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${currentData.phone}`;
    (document.getElementById('resume-institution') as HTMLParagraphElement).textContent = `Institution: ${currentData.institution}`;
    (document.getElementById('resume-degree') as HTMLParagraphElement).textContent = `Degree: ${currentData.degree}`;
    (document.getElementById('resume-gradYear') as HTMLParagraphElement).textContent = `Graduation Year: ${currentData.gradYear}`;
    (document.getElementById('resume-company') as HTMLParagraphElement).textContent = `Company: ${currentData.company}`;
    (document.getElementById('resume-role') as HTMLParagraphElement).textContent = `Role: ${currentData.role}`;
    (document.getElementById('resume-experience-description') as HTMLParagraphElement).textContent = `Description: ${currentData.experience}`;
    (document.getElementById('resume-skills') as HTMLParagraphElement).innerHTML = currentData.skills.map(skill => `<span class="skill">${skill}</span>`).join(', ');

    resumeSection.classList.remove('hidden');
  });

  // // Edit Resume functionality
  // document.getElementById('edit-btn')?.addEventListener('click', () => {
  //   populateForm(currentData);
  //   resumeSection.classList.add('hidden');
  // });

  editBtn.addEventListener('click', () => {
    resumeSection.classList.add('hidden'); // Hide the resume section
    form.classList.remove('hidden'); // Show the form
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  });

    // **Download Resume as PDF functionality without requiring installation**
  document.getElementById('downloadBtn')?.addEventListener('click', () => {
  const resumeElement = document.getElementById('resume') as HTMLElement;
  const opt = {
    margin: 1,
    filename: `${currentData.name}_Resume.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Ensure html2pdf is available globally before calling it
  if (window['html2pdf']) {
    window['html2pdf']().from(resumeElement).set(opt).save();
  } else {
    console.error('html2pdf library not found.');
  }
  });


  // Shareable Link with user's name in the URL
  document.getElementById('shareBtn')?.addEventListener('click', () => {
    const baseUrl = window.location.href.split('?')[0];
    const nameSlug = currentData.name.replace(/\s+/g, '-').toLowerCase();
    const shareableUrl = `${baseUrl}?resume=${nameSlug}`;

    alert(`Share your resume using this URL: ${shareableUrl}`);
  });

  // Handle image upload
  const imageInput = document.getElementById('upload') as HTMLInputElement;
  const profileImg = document.getElementById('profile-img') as HTMLImageElement;

  imageInput.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImg.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  });
});
