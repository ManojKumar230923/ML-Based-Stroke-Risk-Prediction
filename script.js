function predictStroke() {
    let gender = parseInt(document.getElementById("gender").value);
    let hypertension = parseInt(document.getElementById("hypertension").value);
    let heartDisease = parseInt(document.getElementById("heartDisease").value);
    let everMarried = parseInt(document.getElementById("everMarried").value);
    let workType = parseInt(document.getElementById("workType").value);
    let residenceType = parseInt(document.getElementById("residenceType").value);
    let smokingStatus = parseInt(document.getElementById("smokingStatus").value);
    let diabetes = parseInt(document.getElementById("diabetes").value);
    let physicalActivity = parseInt(document.getElementById("physicalActivity").value);
    let obesity = parseInt(document.getElementById("obesity").value);
    let chronicDisease = parseInt(document.getElementById("chronicDisease").value);
    let alcoholConsumption = parseInt(document.getElementById("alcoholConsumption").value);
    let familyHistory = parseInt(document.getElementById("familyHistory").value);

    let riskScore = 0;

    if (hypertension) riskScore += 2;
    if (heartDisease) riskScore += 2;
    if (diabetes) riskScore += 2;
    if (obesity) riskScore += 2;
    if (chronicDisease) riskScore += 2;
    if (familyHistory) riskScore += 2;
    if (smokingStatus) riskScore += 1;
    if (alcoholConsumption) riskScore += 1;
    if (physicalActivity === 0) riskScore += 1;

    let resultText = "";

    if (riskScore >= 10) {
        resultText = "⚠ High Stroke Risk! Immediate medical attention recommended.";
    } else if (riskScore >= 5) {
        resultText = "⚠ Moderate Stroke Risk. Consider consulting a doctor.";
    } else {
        resultText = "✅ Low Stroke Risk. Maintain a healthy lifestyle!";
    }

    document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
}
