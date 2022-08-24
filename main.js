function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobilNet' ,modelLoadad);
    canvas = createCanvas(300, 300);
    canvas.center();
  }
  
  
  function modelLoadad() {
      console.log('Moedl Loaded');
  }
  
  
  function draw () {
      image(video, 0 ,0, 300, 300,);
      classifier.classify(video, gotResult);
  }

    
  