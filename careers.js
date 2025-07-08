const jobs = [
  {
    title: "Digital Designer",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  },
  {
    title: "Graphic Artist",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  },
  {
    title: "Sales Reporter",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  },
  {
    title: "Digital Marketer",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  },
  {
    title: "Web Designer",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  },
  {
    title: "Web Developer",
    company: "Jam Sports Productions LLC",
    department: "Admin",
    location: "Newyork, SCT",
    type: "Remote",
    description: "We would love to share a similar experience and how I learned some valuable lessons."
  }
];

function renderJobs() {
  const container = document.getElementById("careerContainer");
  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h2 class="job-title">${job.title}</h2>
      <div class="job-meta">${job.company} | ${job.department} | ${job.location} | ${job.type}</div>
      <p class="job-desc">${job.description}</p>
      <button class="apply-btn" onclick="applyJob('${job.title}')">Apply Now</button>
    `;
    container.appendChild(div);
  });
}

function applyJob(title) {
  alert(`You clicked to apply for: ${title}`);
}

window.onload = renderJobs;
