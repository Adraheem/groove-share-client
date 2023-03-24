class Utils {
  public formatDuration(duration: number): string {
    return new Date(duration * 1000).toISOString().slice(14, 19);
  }

  public randomNumExclude(x: number, y: number) {
    let num = Math.floor(Math.random() * x);
    if (num === y) {
      // num = (num + 1) % x;
      this.randomNumExclude(x, y);
    }
    return num;
  }

}

const utils = new Utils();
export default utils;
