let totalInterview = [];
let totalRejection = [];
let currentFilter = "all";

const total = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");
const availableCount = document.getElementById("available-count");

const cardSection = document.getElementById("cardsItems");
const afterFilter = document.getElementById("after-filter");

const filterBtn = document.getElementById("filter-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectBtn = document.getElementById("reject-btn");

function updateCount() {
    const allCards = document.querySelectorAll("#cardsItems .job-card").length;
    total.innerText = allCards;
    interviewCount.innerText = totalInterview.length;
    rejectedCount.innerText = totalRejection.length;
    availableCount.innerText = allCards + " jobs";
}
updateCount();
function toggleStyle(id) {

    currentFilter = id;

    [filterBtn, interviewBtn, rejectBtn].forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-white", "text-black");
    });
    const activeBtn = document.getElementById(id);
    activeBtn.classList.remove("bg-white", "text-black");
    activeBtn.classList.add("bg-blue-600", "text-white");

    afterFilter.innerHTML = "";

    if (id === "filter-btn") {
        cardSection.classList.remove("hidden");
        afterFilter.classList.add("hidden");
    }
    if (id === "interview-btn") {
        cardSection.classList.add("hidden");
        afterFilter.classList.remove("hidden");
        renderFiltered(totalInterview);
    }
    if (id === "reject-btn") {
        cardSection.classList.add("hidden");
        afterFilter.classList.remove("hidden");
        renderFiltered(totalRejection);
    }
}
document.querySelector("main").addEventListener("click", function (e) {
    const card = e.target.closest(".job-card");
    if (!card) return;
    const jobName = card.querySelector(".jobName").innerText;
    const jobPosition = card.querySelector(".jobPosition").innerText;
    const jobSalary = card.querySelector(".jobSalary").innerText;
    const jobDetails = card.querySelector(".jobDetails").innerText;
    const statusBtn = card.querySelector(".jobStatus");
    const jobData = {
        jobName,
        jobPosition,
        jobSalary,
        jobDetails
    };
    if (e.target.classList.contains("interview-btn")) {

        const exists = totalInterview.find(j => j.jobName === jobName);
        if (!exists) {
            totalInterview.push(jobData);
        }

        totalRejection = totalRejection.filter(j => j.jobName !== jobName);

        statusBtn.innerText = "Applied";

        updateCount();

        if (currentFilter === "interview-btn") {
            renderFiltered(totalInterview);
        }
    }
    if (event.target.classList.contains("reject-btn")) {

        const exists = totalRejection.find(j => j.jobName === jobName);
        if (!exists) {
            totalRejection.push(jobData);
        }

        totalInterview = totalInterview.filter(j => j.jobName !== jobName);

        statusBtn.innerText = "Rejected";

        updateCount();

        if (currentFilter === "reject-btn") {
            renderFiltered(totalRejection);
        }
    }
    if (e.target.closest(".delete-btn")) {

        card.remove();

        totalInterview = totalInterview.filter(j => j.jobName !== jobName);
        totalRejection = totalRejection.filter(j => j.jobName !== jobName);

        updateCount();

        if (currentFilter === "interview-btn") {
            renderFiltered(totalInterview);
        }

        if (currentFilter === "reject-btn") {
            renderFiltered(totalRejection);
        }
    }
});
function renderFiltered(dataArray) {
    afterFilter.innerHTML = "";
    dataArray.forEach(job => {
        const div = document.createElement("div");
        div.className = "border rounded-md border-gray-100 my-4 p-6 flex justify-between bg-white job-card ";
        div.innerHTML = `
            
                <div>
                    <div class="mb-2">
                        <p class="jobName text-2xl font-bold">${job.jobName}</p>
                        <p class="jobPosition text-gray-500">${job.jobPosition}</p>
                    </div>

                    <p class="jobSalary mb-2 text-gray-500">
                        ${job.jobSalary}
                    </p>

                    <div class="mb-5">
                        <button class="jobStatus bg-blue-100 py-1 px-2 rounded text-gray-900 mb-2">
                        ${currentFilter === "interview-btn" ? "Interview" : "Rejected"} 
                        </button>
                        <p class="jobDetails text-gray-700">
                            ${job.jobDetails}
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <button
                            class="interview-btn border py-2 px-3 font-semibold uppercase border-green-600 text-green-600">
                            Interview
                        </button>

                        <button class="reject-btn border py-2 px-3 font-semibold uppercase border-red-600 text-red-600">
                            Rejected
                        </button>
                    </div>
                </div>
                <div>
                    <button class="delete-btn border rounded-full p-2 border-gray-300">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
        `;
        afterFilter.appendChild(div);
    });
}