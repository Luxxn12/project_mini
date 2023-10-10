import { EditExperience } from '@/modules/experience';
import { funGetOneExperience } from '@/modules/experience/fun/get_one_experience';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  const data = await funGetOneExperience({id: params.id})
  return (
    <EditExperience data={data}/>
  );
}

