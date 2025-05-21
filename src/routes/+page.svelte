
 <script>
import axios from 'axios';

let scenario = '';
let tone = 'Select Tone';
let error = '';
let emailResponse = '';
let loading = false

console.log("emailResponse", emailResponse)


async function generateEmail(){

if(scenario === '' || tone === 'Select Tone'){
  error = 'Please fill in all fields.'
  loading = false
  return
}

  try{
    loading = true
    error = ''
    emailResponse = ''
const response = await axios.post('/api/generate-email', {
  scenario,
  tone
})
if(response.status !== 200){
  error = 'Response Error, please try again.'
  loading = false

  return
}
console.log("Response", response)
  emailResponse = response.data.email

  loading = false
  scenario = ''
  tone = 'Select Tone'

} catch (err) {
  console.error(err)
  error = 'Error generating email.'
  
}
finally{
  loading = false
}
}


</script>

<div class="min-h-scree">
<div class="max-w-md mx-auto p-4">
<div class="flex items-center justify-center mt-8"> 
  <h1 class="text-2xl font-bold">Smart Email Writer</h1>
</div> 

 <div class="mt-8">

   <label for="scenario">Enter the Scenario:</label>
   <textarea 
    id="scenario"
      required
   bind:value={scenario}
    rows="4"
    placeholder="Describe the scenario for the email you want to generate."
   class="border p-2 w-full mb-4 rounded-md"
   ></textarea>
  </div>
  
<div>
  <label for="tones">Tones:</label>
  
  <select 
  id="tones"
  required
  bind:value={tone} 
  class="border p-2 w-full mb-4 rounded-md">
  <option selected disabled>Select Tone</option>
  <option>Professional</option>
  <option>Friendly</option>
  <option>Apologetic</option>
</select>
</div>

  <button on:click={generateEmail} class="  bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
     {#if loading}
    <!-- Loading Spinner -->
      <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    {:else}
      Generate Email
    {/if}

  </button>

  {#if error}
    <p class="text-red-600 mt-4">{error}</p>
  {/if}

  {#if emailResponse}
    <div class=" mt-6 p-4 bg-gray-100  rounded shadow-lg w-full">
      <h2 class="font-bold mb-2">Generated Email:</h2>
      <p>{emailResponse}</p>
    </div>
  {/if}
</div>
</div>
