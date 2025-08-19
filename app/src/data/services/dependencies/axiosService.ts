import axios from "axios";

export class axiosService {

  async get(url: string): Promise<{ user: string }> {
    return await axios.get(url)
  }


}
