import { storeLanguage } from 'functions';

const actions = {
  updateModalVisible: (state, payload) => {
    const updatedState = { ...state };
    updatedState.global.modalVisible = payload;
    return updatedState;
  },

  updateShowKeyboard: (state, payload) => {
    const updatedState = { ...state };
    updatedState.global.isShowKeyboard = payload;
    return updatedState;
  },

  updateFirstDownloadStatus: (state, payload) => {
    const updatedState = { ...state };
    updatedState.global.isFirstDownload = payload;
    return updatedState;
  },

  updateCountry: (state, payload) => {
    const updatedState = { ...state };
    updatedState.global.country = payload;
    return updatedState;
  },

  updateLanguage: (state, payload) => {
    storeLanguage(payload);

    const updatedState = { ...state };
    updatedState.global.language = payload;
    return updatedState;
  },

  updateServices: (state, payload) => {
    const updatedState = { ...state };
    updatedState.global.services = payload;
    return updatedState;
  },
};

export const {
  updateModalVisible,
  updateShowKeyboard,
  updateFirstDownloadStatus,
  updateCountry,
  updateLanguage,
  updateServices,
} = actions;
