import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      try {
        await apiClient.post("/auth/token/refresh");
        originalRequest._retry = true;
        return apiClient(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// 이미지 업로드 API 함수
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await apiClient.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.url;
  } catch (error) {
    throw error;
  }
};

// 게시글 등록 함수
export const createArticle = async (data: {
  image?: string;
  content: string;
  title: string;
}) => {
  try {
    const response = await apiClient.post("/articles", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
