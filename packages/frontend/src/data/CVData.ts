import type { Ref } from 'vue';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export interface CVData {
  photo: string;
  base: {
    name: string;
    sex: string;
    title: string;
    intention: string;
    age: number;
    phone: string;
    address: string;
    city: string;
    email: string;
    blog: {
      text: string;
      link: string;
    };
    github: {
      text: string;
      link: string;
    };
    website: {
      text: string;
      link: string;
    };
  };
  watermark: string[];
  edu_base: {
    school: string;
    degree: string;
    major: string;
    date: string;
  };
  edu: {
    gpa: string;
    course: string;
    course_para: string;
    history: string[];
  };
  awards: string[];
  projects: {
    link: string;
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
