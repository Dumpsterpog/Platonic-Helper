module.exports = async (client) => {
    console.log("Client is up");
// 936942255451803648
    client.application.commands.set([...client.commands.map(v => v.data)], "936942255451803648");

    
}
