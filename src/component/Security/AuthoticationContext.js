import { Components } from "antd/lib/date-picker/generatePicker";
import { tuple } from "antd/lib/_util/type";
import React, { Component } from "react";
import axios from "axios";
import APIServer from "./ConnectServer";
import ExportTypography from "antd/lib/typography/Typography";
import { COMPANY_PERMISSION, PAGE_COMPANY, PAGE_USER, PAGE_USERPAGES, PAGE_USERROLE } from "../../Modules/Constant";
import Permission from "./Permission";
export const UserContext = React.createContext(null);

export const ADMIN = "ADMIN";
export const SUPERADMIN = 2;
export const USER = 3;
export const EMPLOYEE = "EMPLOYEE";
export const VENDOR = 5;

const apiServer = axios.create({
  baseURL: "https://localhost:44393",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      signIn: this.login,
      signOut: this.logout,
      signUp: this.register,
      resetPassword: this.resetPassword,
      userHasPagePermission:  this.hasPagePermission,
      userInfo: {
        token: null,
        username: null,
        isLogin: false,
        role: ADMIN,
        Pages: this.getUserPages(),
        userProfile: this.getProfile,
        permissions: this.getUserPermission(),
      },
    };
  }
  fetchWeatherCast = async () => {
    const res = await apiServer.get("/api/WeatherForecast/list", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${this.state.token}`,
      },
    });

    return res.data;
  };

  getUserPages = () => {
    return [PAGE_COMPANY,PAGE_USER,PAGE_USERPAGES,PAGE_USERROLE];
  };
  hasPagePermission = (page) => {
    console.log(page);
    const hasPermission = this.state.userInfo.Pages.some(v => v === page)
    console.log(hasPermission)
    if (hasPermission)
    {
      return {
        status: true,
        permissions: this.getUserPermission().filter(
          (val) => val.page === page
        ),
      };
    }

    return { status: false, permissions: [] };
  };

  getPermissionbyPage = (page) => {
    return [
      "MASTER.COMPANY.VIEW",
      "MASTER.COMPANY.UPATE",
      "MASTER.COMPANY.CREATE",
    ];
  };
  resetPassword = (username) => {};
  login = async (username, Password) => {
    if (username === "chandru" && Password === "password") {
      const userData = {
        token: "tdytdydrdfstdfdr",
        username: username,
        isLogin: true,
        role: ADMIN,
        userProfile: this.getProfile,
        permissions: this.getUserPermission(),
        Pages: this.getUserPages(),
      };
      this.setState({ userInfo: userData });
      return {
        status: 200,
        message: "Login Success",
      };

      return {
        status: 200,
        message: "Login Success",
      };
    }

    return {
      status: 500,
      message: "Error",
    };

    try {
      const res = await axios.post(
        "https://localhost:44393/api/user/login",
        {
          userName: username,
          password: Password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      this.setState({ isLogin: true, token: res.data });
      return {
        status: res.status,
        message: "Login Success",
      };

      return false;
    } catch (error) {
      console.log(error);
      return {
        status: error.code,
        message: error.message,
      };
    }
  };

  logout = async () => {};

  register = async (userRegData) => {
    return {
      status: 200,
      message: "User Registration Completed",
    };
  };
  getProfile = async (username) => {};

  getUserPermission = () => {
    return [
      {
        page: PAGE_COMPANY,
        permissions :[Permission.APPROVAL,Permission.CREATE,Permission.UPDATE,Permission.VIEW]
      },
      {
        page: "ADMINDASHBOARD",
        create: false,
        edit: false,
        delete: false,
        view: false,
      },
    ];
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const WeatherContext = React.createContext(null);
