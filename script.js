let totalInterview = [];
let totalRejection = [];

let total = document.getElementById('total');
let selectInterview = document.getElementById('interview');
let rejectedList = document.getElementById('rejected');

const filterBtn = document.getElementById('filter-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectionBtn = document.getElementById('reject-btn')

const cardSection = document.getElementById('cardsItems')
const mainContainer = document.querySelector('main')

const afterFilter = document.getElementById('after-filter')


function jobCount() {
    document.querySelectorAll('#cardsItems').length
    selectInterview.innerText = totalInterview.length
    rejectedList.innerText = totalRejection.length
}

jobCount();

function toggleStyle(id) {



    filterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewBtn.classList.remove('bg-blue-600', 'text-white');
    rejectionBtn.classList.remove('bg-blue-600', 'text-white');

    filterBtn.classList.add('bg-white', 'text-black');
    interviewBtn.classList.add('bg-white', 'text-black');
    rejectionBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-600', 'text-white');



    // console.log(selected)

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-600', 'text-white')



    if (id === 'interview-btn') {
        cardSection.classList.add('hidden');
        afterFilter.classList.remove('hidden');
    }

    else if (id === 'filter-btn') {
        cardSection.classList.remove('hidden');
        afterFilter.classList.add('hidden');
    }

    // }

    // if (id === 'reject-btn') {
    //     cardSection.classList.add('hidden');
    //     afterFilter.classList.remove('hidden');

    // }

}

mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.parentNode)
    console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const jobName = parentNode.querySelector('.jobName').innerText
        const jobPosition = parentNode.querySelector('.jobPosition').innerText
        const jobSalary = parentNode.querySelector('.jobSalary').innerText
        const jobStatus = parentNode.querySelector('.jobStatus').innerText
        const jobDetails = parentNode.querySelector('.jobDetails').innerText

        parentNode.querySelector('.jobStatus').innerText = 'Interview'

        const cardDetails = {
            jobName,
            jobPosition,
            jobSalary,
            jobStatus: 'Interview',
            jobDetails
        }
        // console.log(cardDetails)


        const jobExist = totalInterview.find(i => i.jobName == cardDetails.jobName)
        

        if (!jobExist) {
            totalInterview.push(cardDetails)
        }

        jobCount()
        renderInterview()
    }

})

function renderInterview() {
    afterFilter.innerHTML = ''

    for (let interview of totalInterview) {

        console.log(interview)

        let div = document.createElement('div');
        div.className = 'cardsItems'
        div.innerHTML = `
        <div class="border rounded-md border-gray-100 my-4 p-6 flex justify-between bg-white">
                <div>
                    <div class="mb-2">
                        <p class=" jobName text-2xl font-bold">${interview.jobName}</p>
                        <p class=" jobPosition text-gray-500">${interview.jobPosition}</p>
                    </div>
                    <p class=" jobSalary mb-2 text-gray-500">${interview.jobSalary}</p>
                    <div class=" mb-5">
                        <button class=" jobStatus bg-blue-100 py-1 px-2 rounded-b-sm text-gray-900 mb-2">${interview.jobStatus}</button>
                        <p class="jobDetails text-gray-700">${interview.jobDetails}</p>
                    </div>
                    <div>
                        <button
                            class="border rounded-sm py-2 px-3 font-semibold uppercase border-green-600 text-green-600 cursor-pointer interview-btn">Interview</button>
                        <button
                            class="border rounded-sm py-2 px-3 font-semibold uppercase mx-1 border-red-600 text-red-600 cursor-pointer">Rejected</button>
                    </div>
                </div>

                <div>
                    <button class="border rounded-full p-2 border-gray-300 cursor-pointer"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            
            </div>
        `
        afterFilter.appendChild(div)
    }
}
