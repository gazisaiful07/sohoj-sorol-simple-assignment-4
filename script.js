let totalInterview = [];
let totalRejection = [];

let total = document.getElementById('total');
let selectInterview = document.getElementById('interview');
let rejectedList = document.getElementById('rejected');

const filterBtn = document.getElementById('filter-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectionBtn = document.getElementById('reject-btn');

const cardSection = document.getElementById('cardsItems');
const afterFilter = document.getElementById('after-filter');

function jobCount() {
    const totalCards = document.querySelectorAll('#cardsItems .border').length;
    total.innerText = totalCards;
    selectInterview.innerText = totalInterview.length;
    rejectedList.innerText = totalRejection.length;
}

jobCount();

function toggleStyle(id) {

    // reset
    filterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewBtn.classList.remove('bg-blue-600', 'text-white');
    rejectionBtn.classList.remove('bg-blue-600', 'text-white');

    filterBtn.classList.add('bg-white', 'text-black');
    interviewBtn.classList.add('bg-white', 'text-black');
    rejectionBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-600', 'text-white');

    afterFilter.innerHTML = '';

    if (id === 'filter-btn') {
        cardSection.classList.remove('hidden');
        afterFilter.classList.add('hidden');
    }

    if (id === 'interview-btn') {
        cardSection.classList.add('hidden');
        afterFilter.classList.remove('hidden');
        renderCards(totalInterview);
    }

    if (id === 'reject-btn') {
        cardSection.classList.add('hidden');
        afterFilter.classList.remove('hidden');
        renderCards(totalRejection);
    }
}

document.querySelector('main').addEventListener('click', function (event) {

    const card = event.target.closest('.border');
    if (!card) return;

    const jobName = card.querySelector('.jobName').innerText;
    const jobPosition = card.querySelector('.jobPosition').innerText;
    const jobSalary = card.querySelector('.jobSalary').innerText;
    const jobDetails = card.querySelector('.jobDetails').innerText;
    const statusBtn = card.querySelector('.jobStatus');

    const jobData = {
        jobName,
        jobPosition,
        jobSalary,
        jobDetails
    };

    // Interview
    if (event.target.innerText === 'Interview') {

        const exist = totalInterview.find(i => i.jobName === jobName);
        if (!exist) {
            totalInterview.push(jobData);
        }

        statusBtn.innerText = 'Interview';
        statusBtn.classList.remove('bg-blue-100');
        statusBtn.classList.add('bg-green-200');

        jobCount();
    }

    // Rejected
    if (event.target.innerText === 'Rejected') {

        const exist = totalRejection.find(i => i.jobName === jobName);
        if (!exist) {
            totalRejection.push(jobData);
        }

        statusBtn.innerText = 'Rejected';
        statusBtn.classList.remove('bg-blue-100');
        statusBtn.classList.add('bg-red-200');

        jobCount();
    }
});

function renderCards(dataArray) {

    afterFilter.innerHTML = '';

    dataArray.forEach(job => {

        const div = document.createElement('div');
        div.className = 'w-[80%] mx-auto';

        div.innerHTML = `
        <div class="border rounded-md border-gray-100 my-4 p-6 flex justify-between bg-white">
            <div>
                <div class="mb-2">
                    <p class="text-2xl font-bold">${job.jobName}</p>
                    <p class="text-gray-500">${job.jobPosition}</p>
                </div>
                <p class="mb-2 text-gray-500">${job.jobSalary}</p>
                <div class="mb-5">
                    <button class="py-1 px-2 rounded-b-sm bg-gray-200 mb-2">${job.jobStatus || ''}</button>
                    <p class="text-gray-700">${job.jobDetails}</p>
                </div>
            </div>
        </div>
        `;

        afterFilter.appendChild(div);
    });
}