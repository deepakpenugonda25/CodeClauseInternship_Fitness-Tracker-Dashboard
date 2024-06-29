document.addEventListener('DOMContentLoaded', () => {
    // Example statistics data
    const stats = {
        steps: 10234,
        calories: 558,
        distance: +8 // in km
    };

    // Update statistics
    document.getElementById('steps').textContent = stats.steps;
    document.getElementById('calories').textContent = stats.calories;
    document.getElementById('distance').textContent = stats.distance;

    // Example workout plans data
    const workoutPlans = [
        {
            title: 'Beginner Full Body Workout',
            description: 'A simple full-body workout for beginners.',
            image: 'images/workout1.jpg'
        },
        {
            title: 'Advanced HIIT Session',
            description: 'A high-intensity interval training session for advanced users.',
            image: 'images/workout2.jpg'
        }
    ];

    // Render workout plans
    const workoutContainer = document.querySelector('.workout-container');
    workoutPlans.forEach(plan => {
        const workoutDiv = document.createElement('div');
        workoutDiv.classList.add('workout');
        workoutDiv.innerHTML = `
            <img src="${plan.image}" alt="${plan.title}">
            <h3>${plan.title}</h3>
            <p>${plan.description}</p>
        `;
        workoutContainer.appendChild(workoutDiv);
    });
});
