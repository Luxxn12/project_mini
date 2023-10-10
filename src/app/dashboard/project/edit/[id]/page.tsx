
import { funGetOneProject } from '@/modules/project/fun/get_one_project';
import EditProject from '@/modules/project/view/edit_project';
import React from 'react';

export default async function Page({params}: {params: {id: any}}) {
  const data = await funGetOneProject({id: params.id})
  return (
   <EditProject data={data}/>
  );
}

