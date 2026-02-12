<template>
  <q-page class="flex flex-center flex-column">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Backend Info</div>
      </q-card-section>

      <q-separator />

      <q-card-section v-if="data">
        <div class="text-subtitle1">Message: {{ data.message }}</div>
        <div class="text-caption">Timestamp: {{ data.timestamp }}</div>
      </q-card-section>

      <q-card-section v-else-if="error">
        <div class="text-negative">Error: {{ error }}</div>
      </q-card-section>

      <q-card-section v-else>
        <q-spinner color="primary" size="3em" />
        <div>Loading from backend...</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Refresh" color="primary" @click="fetchData" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref(null)
const error = ref(null)

const fetchData = async () => {
    try {
        error.value = null
        const response = await axios.get('http://localhost:3000/api/demo')
        data.value = response.data
    } catch (e) {
        error.value = "Could not connect to backend"
        console.error(e)
    }
}

onMounted(fetchData)
</script>
