import type { Ref } from 'vue';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export interface CVData {
  photo: string;
  base: {
    name: string;
    age: number;
    phone: string;
    address: string;
    email: string;
    blog: {
      text: string;
      link: string;
    };
    github: {
      text: string;
      link: string;
    };
  };
  watermark: string[];
  eduBase: {
    school: string;
    degree: string;
    major: string;
    date: string;
  };
  edu: {
    gpa: string;
    course: string;
    coursePara: string;
    history: string[];
  };
  awards: string[];
  projects: {
    header: string[];
    body: string[];
  }[];
  competence: string[];
  certificates: {
    name: string;
    items: string[];
  }[];
};

const cvData: Ref<CVData | undefined> = ref();
export default cvData;

export const loadCVData = async (token: string) => {
  const res = await axios.get(baseURL + '/cv/get', {
    headers: {
      Authorization: token,
    },
  });
  cvData.value = res.data;
}
