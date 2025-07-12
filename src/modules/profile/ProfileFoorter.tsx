/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from "react";

function ProfileFoorter() {
  return (
    <footer className="w-full h-[100px] bg-black flex items-center justify-center flex-col pt-3 pb-3 border-t-[1px] border-t-primary gap-2">
      <div className="text-base text-primary font-ibm">
        Copyright 2025 Nguyen Trong Qui
      </div>
      <div className="text-[14px] text-primary font-ibm">
        @All rights reserved.
      </div>
    </footer>
  );
}

export default ProfileFoorter;
