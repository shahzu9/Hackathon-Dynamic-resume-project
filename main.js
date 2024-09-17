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
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume');
    var editBtn = document.getElementById('edit-btn');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var institutionInput = document.getElementById('institution');
    var degreeInput = document.getElementById('degree');
    var gradYearInput = document.getElementById('gradYear');
    var companyInput = document.getElementById('company');
    var roleInput = document.getElementById('role');
    var experienceInput = document.getElementById('experience');
    var skillsInput = document.getElementById('skills');
    var currentData = {}; // Store resume data for editing
    // Function to populate the form for editing
    var populateForm = function (data) {
        var _a;
        nameInput.value = data.name || '';
        emailInput.value = data.email || '';
        phoneInput.value = data.phone || '';
        institutionInput.value = data.institution || '';
        degreeInput.value = data.degree || '';
        gradYearInput.value = data.gradYear || '';
        companyInput.value = data.company || '';
        roleInput.value = data.role || '';
        experienceInput.value = data.experience || '';
        skillsInput.value = ((_a = data.skills) === null || _a === void 0 ? void 0 : _a.join(', ')) || '';
    };
    // Handle form submission
    form.addEventListener('submit', function (event) {
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
            skills: skillsInput.value.split(',').map(function (skill) { return skill.trim(); }),
        };
        // Update resume section
        document.getElementById('resume-name').textContent = currentData.name;
        document.getElementById('resume-email').textContent = "Email: ".concat(currentData.email);
        document.getElementById('resume-phone').textContent = "Phone: ".concat(currentData.phone);
        document.getElementById('resume-institution').textContent = "Institution: ".concat(currentData.institution);
        document.getElementById('resume-degree').textContent = "Degree: ".concat(currentData.degree);
        document.getElementById('resume-gradYear').textContent = "Graduation Year: ".concat(currentData.gradYear);
        document.getElementById('resume-company').textContent = "Company: ".concat(currentData.company);
        document.getElementById('resume-role').textContent = "Role: ".concat(currentData.role);
        document.getElementById('resume-experience-description').textContent = "Description: ".concat(currentData.experience);
        document.getElementById('resume-skills').innerHTML = currentData.skills.map(function (skill) { return "<span class=\"skill\">".concat(skill, "</span>"); }).join(', ');
        resumeSection.classList.remove('hidden');
    });
    // // Edit Resume functionality
    // document.getElementById('edit-btn')?.addEventListener('click', () => {
    //   populateForm(currentData);
    //   resumeSection.classList.add('hidden');
    // });
    editBtn.addEventListener('click', function () {
        resumeSection.classList.add('hidden'); // Hide the resume section
        form.classList.remove('hidden'); // Show the form
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    });
    // **Download Resume as PDF functionality without requiring installation**
    (_a = document.getElementById('downloadBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var resumeElement = document.getElementById('resume');
        var opt = {
            margin: 1,
            filename: "".concat(currentData.name, "_Resume.pdf"),
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Ensure html2pdf is available globally before calling it
        if (window['html2pdf']) {
            window['html2pdf']().from(resumeElement).set(opt).save();
        }
        else {
            console.error('html2pdf library not found.');
        }
    });
    // Shareable Link with user's name in the URL
    (_b = document.getElementById('shareBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var baseUrl = window.location.href.split('?')[0];
        var nameSlug = currentData.name.replace(/\s+/g, '-').toLowerCase();
        var shareableUrl = "".concat(baseUrl, "?resume=").concat(nameSlug);
        alert("Share your resume using this URL: ".concat(shareableUrl));
    });
    // Handle image upload
    var imageInput = document.getElementById('upload');
    var profileImg = document.getElementById('profile-img');
    imageInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profileImg.src = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    });
});
