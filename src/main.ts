import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    await exec.exec(
      `choco install vswhere -v -y -force`
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
