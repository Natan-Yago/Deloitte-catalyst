function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Example usage
showPopup();
// Simulate a process
setTimeout(hidePopup, 3000); // Hide after 3 seconds


document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("animated-button");

    gsap.to(button, {
        duration: 4,
        borderColor: "rgba(0, 128, 0, 1)",
        ease: "linear",
        onComplete: function() {
            // Reset the border color if needed
            gsap.to(button, {
                duration: 0,
                borderColor: "rgba(0, 128, 0, 0.4)"
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[id^="btn-batch-"]');
    const logoSets = document.querySelectorAll('div[id^="batch-"]');
    const select = document.getElementById('Tab');

    // Show Batch 7 logos by default and set the active button
    document.getElementById('btn-batch-7').classList.add('bg-lightGreen');
    document.getElementById('btn-batch-7').classList.add('text-green');

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
            buttons.forEach(btn => btn.classList.remove('bg-lightGreen'));
            buttons.forEach(btn => btn.classList.remove('text-green'));

            // Add active class to the clicked button
            this.classList.add('bg-lightGreen');
            this.classList.add('text-green');


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
        buttons.forEach(btn => btn.classList.remove('bg-lightGreen'));

        // Add active class to the corresponding button
        document.getElementById('btn-' + batchId).classList.add('bg-lightGreen');

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
