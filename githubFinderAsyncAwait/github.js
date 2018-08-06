class Github {

    constructor(){
        this.client_id = '013e4d7c5f547631d0ca';
        this.client_secret = '7b63a763ac8b82fa451c392e577030a97fce20f4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}$client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        

        return {        
            profile,
            repos
        }
    }
}