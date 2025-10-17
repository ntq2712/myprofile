/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import AddWork from '@/modules/admin/work-experience/AddWork'
import WorkExperienceList from '@/modules/admin/work-experience/WorkExperienceList'
import React from 'react'

function page() {
  return (
    <div>
      <AddWork/>
      <WorkExperienceList/>
    </div>
  )
}

export default page
