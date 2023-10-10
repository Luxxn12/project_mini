import { EditSkill } from '@/modules/skill';
import { funGetOneSkill } from '@/modules/skill/fun/get_one_skill';
import React from 'react';

export default async function Page({params}: {params: {id: any}}) {
  const data = await funGetOneSkill({id: params.id})
  return (
    <EditSkill data={data}/>
  );
}

