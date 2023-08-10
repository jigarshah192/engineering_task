export const getApplicationList =async () => {
  const response = await fetch('https://engineering-task.elancoapps.com/api/applications');
  const data = await response.json();
  return data;
}

export const getResourcesList =async () => {
  const response = await fetch('https://engineering-task.elancoapps.com/api/resources');
  const data = await response.json();
  return data;
}

export const getApplicationData =async (appId: string) => {
  const response = await fetch(`https://engineering-task.elancoapps.com/api/applications/${appId}`);
  const data = await response.json();
  return data;
}

export const getResourcesData =async (resId: string) => {
  const response = await fetch(`https://engineering-task.elancoapps.com/api/resources/${resId}`);
  const data = await response.json();
  return data;
}