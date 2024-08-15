function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Example usage
showPopup();
// Simulate a process
setTimeout(hidePopup, 8000); // Hide after 8 seconds



// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('button[id^="btn-batch-"]');
//     const logoSets = document.querySelectorAll('div[id^="batch-"]');
//     const select = document.getElementById('Tab');

//     // Show Batch 7 logos by default and set the active button
//     document.getElementById('btn-batch-7').classList.add('active');
//     logoSets.forEach(set => {
//         if (set.id === 'batch-7-logos') {
//             set.classList.remove('hidden');
//         } else {
//             set.classList.add('hidden');
//         }
//     });

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             const batchId = this.id.replace('btn-', '');

//             // Remove active class from all buttons
//             buttons.forEach(btn => btn.classList.remove('active'));

//             // Add active class to the clicked button
//             this.classList.add('active');

//             // Show the relevant logo set and hide others
//             logoSets.forEach(set => {
//                 if (set.id === batchId + '-logos') {
//                     set.classList.remove('hidden');
//                 } else {
//                     set.classList.add('hidden');
//                 }
//             });

//             // Update the select element to match the clicked button
//             select.value = batchId;
//         });
//     });

//     select.addEventListener('change', function () {
//         const batchId = this.value;

//         // Remove active class from all buttons
//         buttons.forEach(btn => btn.classList.remove('active'));

//         // Add active class to the corresponding button
//         document.getElementById('btn-' + batchId).classList.add('active');

//         // Show the relevant logo set and hide others
//         logoSets.forEach(set => {
//             if (set.id === batchId + '-logos') {
//                 set.classList.remove('hidden');
//             } else {
//                 set.classList.add('hidden');
//             }
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[id^="btn-batch-"]');
    const logoSets = document.querySelectorAll('div[id^="batch-"]');
    const select = document.getElementById('Tab');

    // Show Batch 7 logos by default and set the active button
    document.getElementById('btn-batch-7').classList.add('bg-green');
    document.getElementById('btn-batch-7').classList.add('text-white');

    logoSets.forEach(set => {
        if (set.id === 'batch-7-logos') {
            set.classList.remove('hidden');
        } else {
            set.classList.add('hidden');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const batchId = this.id.replace('btn-', '');

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('bg-green'));
            buttons.forEach(btn => btn.classList.remove('text-white'));

            // Add active class to the clicked button
            this.classList.add('bg-green');
            this.classList.add('text-white');


            // Show the relevant logo set and hide others
            logoSets.forEach(set => {
                if (set.id === batchId + '-logos') {
                    set.classList.remove('hidden');
                } else {
                    set.classList.add('hidden');
                }
            });

            // Update the select element to match the clicked button
            select.value = batchId;
        });
    });

    select.addEventListener('change', function () {
        const batchId = this.value;

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('bg-green'));

        // Add active class to the corresponding button
        document.getElementById('btn-' + batchId).classList.add('bg-green');

        // Show the relevant logo set and hide others
        logoSets.forEach(set => {
            if (set.id === batchId + '-logos') {
                set.classList.remove('hidden');
            } else {
                set.classList.add('hidden');
            }
        });
    });
});
