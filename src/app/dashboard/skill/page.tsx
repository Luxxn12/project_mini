import { ListSkill } from '@/modules/skill';
import { funGetAllSkill } from '@/modules/skill/fun/get_all_skill';
import React from 'react';

export default async function Page() {
  const data = await funGetAllSkill()
  return (
    <ListSkill data={data}/>
  );
}
