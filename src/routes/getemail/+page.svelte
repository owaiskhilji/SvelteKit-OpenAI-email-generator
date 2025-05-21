<script lang="ts">
    import { onMount } from 'svelte';
    
    onMount(() => {
        const storedEmails = localStorage.getItem('emails');
        if (storedEmails) {
            const emails = JSON.parse(storedEmails);
            console.log("Stored Emails:", emails);
        } else {
            console.log("No emails found in local storage.");
        }
    });

</script>

<div class="min-h-screen  bg-radial-[at_50%_50%] from-[#7f8f4a] to-[#080904] to-40%">
    
    <div class="mt-12 mx-auto bg-gradient-to-b from-[#0b0b0b] to-[#3a3f1c] text-white p-6 rounded-xl shadow-lg w-72">
  <h2 class="text-xl font-bold">Deluxe <span class="bg-lime-300 text-black text-xs px-2 py-1 rounded-full ml-2">Most Popular</span></h2>
  <p class="text-lime-400 font-semibold text-lg mt-1">$12.50/m</p>
  
  <ul class="mt-4 space-y-2 text-sm">
    <li>✅ Product database - Unlimited searches</li>
    <li>✅ Competitor research - Unlimited searches</li>
    <li>✅ Sales tracker - 50 searches/day</li>
    <li>✅ Top stores - Full access</li>
    <li>✅ Ads spy - -</li>
  </ul>

  <button class="bg-lime-300 hover:bg-lime-400 text-black px-4 py-2 mt-6 rounded-md w-full">
    Buy Now
  </button>
</div>

</div>