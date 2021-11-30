function start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BMecxO0Rx/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    function gotResults(error, results) {
        if (error) {
            console.error(error);
        }
        else {

            document.getElementById("result_label").innerHTML = "I hear- " + results[0].label;
            document.getElementById("result_accuracy").innerHTML = "Accuracy- " + (results[0].confidence * 100).toFixed(2) + " %";
            if (results[0].label == "Background Noise") {
                document.getElementById("displayed-image").src = "default.png";
            }
            else if (results[0].label == "Barking") {
                document.getElementById("displayed-image").src = "dog.jpg";
            }
            else if (results[0].label == "Meowing") {
                document.getElementById("displayed-image").src = "cat.jpg";
            }
            else if (results[0].label = "roaring") {
                document.getElementById("dispayed-image").src = "lion.jpg";
            }
            else if (results[0].label = "mooing") {
                document.getElementById("displayed-image").src = "cow.jpg";
            }
        }
    }
}