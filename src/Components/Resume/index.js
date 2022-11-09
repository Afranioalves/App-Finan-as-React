import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './style'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Incoming" Icon={FaRegArrowAltCircleUp} value="1000"/>
      <ResumeItem title="Outputs" Icon={FaRegArrowAltCircleDown} value="1000"/>
      <ResumeItem title="Totals" Icon={FaDollarSign} value="1000"/>
    </C.Container>
  )
}

export default Resume
