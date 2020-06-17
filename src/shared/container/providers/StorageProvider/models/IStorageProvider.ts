export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(filet: string): Promise<void>;
}
