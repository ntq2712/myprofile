/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

const setPath = (path: string, sub: string) => {
  if (sub.startsWith("/")) {
    return `${path}${sub}`;
  }

  return `${path}/${sub}`;
};

const root = "api";

const apiUrl = {
  profile: {
    get: setPath(root, "MyProfile/GetProfile"),
    update: setPath(root, "MyProfile/UpdateProfile"),
  },
  caseStudy: {
    getType: setPath(root, "CaseStudyType/GetList"),
    getList: setPath(root, "CaseStudy/GetList"),
    createCaseStudy: setPath(root, "CaseStudy/CreateCaseStudy"),
    createCaseStudyType: setPath(root, "CaseStudyType/CreateCaseStudyType"),
    deleteCaseStudy: (id: string) =>
      setPath(root, `CaseStudy/DeleteById?id=${id}`),
  },
  workExperience: {
    create: setPath(root, "WorkExperience/Create"),
    update: setPath(root, "WorkExperience/Update"),
    getAll: setPath(root, "WorkExperience/GetAll"),
  },
  getInTouch: {
    create: setPath(root, "GetInTouch/Create"),
    getAll: setPath(root, "GetInTouch/GetAll"),
  },
  auth: {
    getPublicKey: setPath(root, "User/public-key"),
    verifyEmail: setPath(root, "User/verify-email"),
    signIn: setPath(root, "User/Login"),
    signUp: "User/Register",
    signInVisitor: setPath(root, "Visitor/LoginVisitor"),
    registerVisitor: setPath(root, "Visitor/RegiteVisitor"),
  },
  testimonial: {
    getAll: setPath(root, "Testimonials/GetAll"),
    getAllByFilter: setPath(root, "Testimonials/GetAllByFilter"),
    create: setPath(root, "Testimonials/Create"),
    updateStatus: setPath(root, "Testimonials/UpdateTestimonialStatus"),
  },
  user: {
    getAll: setPath(root, "User/GetAllUser"),
  },
  guest: {
    getList: setPath(root, "Guest/get-list-guest"),
    getSummaryGuest: setPath(root, "Guest/get-summary-guest"),
    add: setPath(root, "Guest/create-guest"),
    edit: setPath(root, "Guest/update-guest"),
    delete: (id: string) => setPath(root, `Guest/delete-guest?id=${id}`),
  },
};

export default apiUrl;
