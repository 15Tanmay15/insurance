document.getElementById('term-plan-img').addEventListener('click', ()=>{
    console.log('Hey');
    document.getElementById('submit-btn').style.visibility='visible';
    document.getElementById('part2').style.height="16.5rem";
    document.getElementById('Health-Plan').style.display = 'none';
    document.getElementById('Vehicle-Plan').style.display = 'none';
    document.getElementById('Term-Plan').style.display = 'block';
});

document.getElementById('vehicle-plan-img').addEventListener('click', ()=>{
    document.getElementById('submit-btn').style.visibility='visible';
    document.getElementById('part2').style.height="15rem";
    document.getElementById('Term-Plan').style.display = 'none';
    document.getElementById('Health-Plan').style.display = 'none';
    document.getElementById('Vehicle-Plan').style.display = 'block';
});

document.getElementById('health-plan-img').addEventListener('click', ()=>{
    document.getElementById('submit-btn').style.visibility='visible';
    document.getElementById('part2').style.height="20.5rem";
    document.getElementById('Vehicle-Plan').style.display = 'none';
    document.getElementById('Term-Plan').style.display = 'none';
    document.getElementById('Health-Plan').style.display = 'block';
});

document.getElementById('carouselExampleCaptions').addEventListener('click', ()=>{
    document.getElementById('submit-btn').style.display = 'block';
})
