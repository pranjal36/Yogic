class Timer {
  int startTime;
  int interval;
  
  Timer(int time Interval){
    interval = timeInterval;
}
  
  void start() {
    startTime = millis();
  }
  
  boolean complete() {
    int elapsedTime = millis() - startTime;
    if (elapsedTime > interval) {
      return true;
    }else {
      return false;
    }
  }
}