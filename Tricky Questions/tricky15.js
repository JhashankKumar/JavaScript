const channel = {
    channelName: "Tricky Questions",
    vedioCount: 100,
}

delete channel.vedioCount;
const getchannel = channel.vedioCount;

console.log(channel); // { channelName: 'Tricky Questions' }
console.log(getchannel); // undefined

/*
In this example, we have an object channel with two properties: channelName and vedioCount. 
We use the delete operator to remove the vedioCount property from the channel object. 
After that, we try to access the vedioCount property and store it in the getchannel variable. 
Since the vedioCount property has been deleted, getchannel will be undefined.

When we log the channel object, it will only contain the channelName property, 
and when we log getchannel, it will show undefined.
*/