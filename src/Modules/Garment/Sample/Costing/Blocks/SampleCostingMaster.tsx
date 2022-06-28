import { LoadingOutlined, PlusOutlined, DeleteFilled } from '@ant-design/icons';
import { Form, Row, Col, Upload, Input, Table, Typography, Button ,Image} from 'antd';
import { RcFile } from 'antd/lib/upload';
import React, { Component } from 'react'
import StyleCategory from '../../../../Common/StyleCategory';
import PortionEditor from '../../PortionEditor';
import CMTCosting from './CMTCosting';
import CostingSummary from './CostingSummary';
import Emplishment from './Emplishment';
import ProfitSummary from './ProfitSummary';
import TrimsCosting from './TrimsCosting';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

export default class SampleCostingMaster extends Component {
  render() {
    return (
      <div>
         
      </div>
    )
  }
}
