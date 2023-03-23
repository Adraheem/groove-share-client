class Utils {
  public formatDuration(duration: number): string {
    return new Date(duration * 1000).toISOString().slice(14, 19);
  }
}

const utils = new Utils();
export default utils;
