document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  let userName = document.getElementById('runnerName').value;
  let runnerAge = document.getElementById('runnerAge').value;
  let registeredEarly = document.getElementById('registeredEarly').checked;

  let raceNumber = Math.floor(Math.random() * 1000);

  if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
    document.getElementById('response').innerHTML = `Runner ${userName} (${raceNumber}), your race will begin at 9:30 am.`;
  } else if (runnerAge > 18 && !registeredEarly) {
    document.getElementById('response').innerHTML = `Runner ${userName}, late adults run at 11:00 am.`;
  } else if (runnerAge < 18) {
    document.getElementById('response').innerHTML = `Youth registrants run at 12:30 pm (regardless of registration).`;
  } else if (runnerAge == 18) {
    document.getElementById('response').innerHTML = `Runner ${userName}, please see the registration desk.`;
  }

  document.getElementById('response').style.fontSize = '14px';
});